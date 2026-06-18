'use server';
/**
 * @fileOverview An AI agent that analyzes GitHub pull requests or repositories
 * and synthesizes high-impact bullet points summarizing technical contributions and impact.
 *
 * - synthesizeImpactPoints - A function that handles the impact synthesis process.
 * - SynthesizeImpactInput - The input type for the synthesizeImpactPoints function.
 * - SynthesizeImpactOutput - The return type for the synthesizeImpactPoints function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SynthesizeImpactInputSchema = z.object({
  githubUrl: z
    .string()
    .url()
    .describe(
      'The URL of a GitHub pull request or repository (e.g., https://github.com/owner/repo/pull/123 or https://github.com/owner/repo).'
    ),
});
export type SynthesizeImpactInput = z.infer<typeof SynthesizeImpactInputSchema>;

const SynthesizeImpactOutputSchema = z.object({
  impactPoints: z
    .array(z.string())
    .describe('A list of concise, high-impact bullet points summarizing the technical contribution and impact.'),
});
export type SynthesizeImpactOutput = z.infer<
  typeof SynthesizeImpactOutputSchema
>;

/**
 * A mock tool to simulate fetching content from a GitHub URL.
 * In a real application, this would involve making actual API calls to GitHub (e.g., using Octokit).
 * For this exercise, it returns a placeholder string based on the URL type.
 * Proper authentication and error handling would be required in a production environment.
 */
const getGithubContent = ai.defineTool(
  {
    name: 'getGithubContent',
    description: 'Retrieves a content summary of a GitHub repository or pull request given its URL for AI analysis.',
    inputSchema: z.object({
      url: z.string().url().describe('The GitHub URL (repository or pull request).'),
    }),
    outputSchema: z.string().describe('A summary of the GitHub content.'),
  },
  async (input) => {
    const { url } = input;
    if (url.includes('/pull/')) {
      // Mock content for a pull request
      return `GitHub Pull Request: ${url}
Title: Feature: Implement user profile editing
Description: This PR introduces functionality for users to edit their profile information, including name, email, and password. It adds new API endpoints for updating user data, validates input, and updates the database. The UI components for the profile page have also been updated to reflect these changes. Includes extensive unit tests for API and frontend.
Key changes:
- Created new /api/users/{id} PUT endpoint.
- Implemented client-side validation for profile forms.
- Updated 'UserProfile' React component.
- Added database migrations for new fields.
- Integrated with authentication service for password changes.`;
    } else {
      // Mock content for a repository
      return `GitHub Repository: ${url}
Name: Firebase-Genkit-NextJS-Boilerplate
Description: A starter boilerplate for building full-stack applications with Next.js, Firebase, and Genkit AI. It includes pre-configured authentication, database integration, and a basic Genkit AI flow example. Designed for rapid development of AI-powered web applications.
Key features:
- Next.js 14 App Router setup.
- Firebase Authentication (Email/Password, Google).
- Firebase Firestore for data storage.
- Genkit AI initialized and ready for flows.
- Tailwind CSS for styling.
- Example API routes and client components.`;
    }
  }
);

const synthesizeImpactPrompt = ai.definePrompt({
  name: 'synthesizeImpactPrompt',
  input: { schema: z.object({ githubContent: z.string() }) },
  output: { schema: SynthesizeImpactOutputSchema },
  // The 'getGithubContent' tool is called directly by the flow, and its output
  // is passed as 'githubContent' to this prompt. Thus, the prompt itself
  // does not need to invoke the tool.
  prompt: `You are an expert technical writer and AI assistant specializing in summarizing developer contributions.
Your task is to analyze the provided GitHub content and generate 3-5 concise, high-impact bullet points summarizing the technical contribution and its impact.
Focus on:
- Actionable outcomes and measurable improvements.
- Technical challenges overcome and innovative solutions.
- Business value or user benefit.
- Use strong action verbs.
- The output should be a JSON array of strings, where each string is a bullet point.

GitHub Content to analyze:
{{{githubContent}}}`,
});

const synthesizeImpactFlow = ai.defineFlow(
  {
    name: 'synthesizeImpactFlow',
    inputSchema: SynthesizeImpactInputSchema,
    outputSchema: SynthesizeImpactOutputSchema,
  },
  async (input) => {
    // Use the tool to fetch the GitHub content based on the provided URL.
    const githubContent = await getGithubContent({ url: input.githubUrl });

    // Pass the fetched content to the prompt for analysis and impact synthesis.
    const { output } = await synthesizeImpactPrompt({ githubContent });
    return output!;
  }
);

export async function synthesizeImpactPoints(
  input: SynthesizeImpactInput
): Promise<SynthesizeImpactOutput> {
  return synthesizeImpactFlow(input);
}
