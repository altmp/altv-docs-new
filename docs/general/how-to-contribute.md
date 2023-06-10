---
title: How to contribute
sidebar_position: 4
---

# How to contribute

Thank you for your interest in contributing to the alt:V documentation!
Here's a guide to help you get started:

## New articles

### Prepare the article

To prepare a new article for the alt:V documentation, follow these steps:

1. Navigate to the "docs" directory
2. Select the category you want to add the article to
   - If the article you're working on belongs to an existing category, navigate to the corresponding directory within the docs folder
   - If the article belongs to a new category, create a new directory in the docs folder. When creating a new directory, ensure that a _category_.json file is also created within it. This JSON file should contain the following information:
       ```
       {
           "position": Insert the numeric value of the categories sidebar order here,
           "label": "Display Name of the New Category"
       }
       ```
3. Create a new article file
    - The file name should be the same as the article title, but in lowercase and with dashes instead of spaces
    - If you plan to use only markdown, use ".md" as file extension
    - If you plan to use JSX, use ".mdx" as file extension
4. Add the sidebar meta data
    Add the following meta data to the top of the file:
    ```
    ---
    title: "The Document Title"
    sidebar_position: Insert the numeric value of the articles sidebar order here
    ---
    ```

Now you can get started with writing your article and adding the necessary content.

:::info

All articles must follow the style guidelines to achieve a streamlined design between all articles.

:::

### Style guidelines

#### Headings

- Start with the highest level heading (#) for the main section title
- Use a maximum depth of 5 headings (#####) for the article content
- Maintain a logical hierarchy of headings to ensure clarity and organization

#### Content presentation

##### Writing

- Write in clear and concise language
- Avoid excessive technical jargon
- Provide explanations or definitions for specialized terms or acronyms if necessary
  
##### Code Blocks

- Use code blocks (```) with the proper language to distinguish code or command examples
- Format the code properly and ensure readability
- Provide explanations or annotations to clarify the purpose or usage of the code if necessary

##### Lists
- 
- Use bullet points (*) or numbered (1.) lists to present concise and easily digestible information
- Incorporate information into well-structured paragraphs where appropriate

#### Comparisons & Subtopics

- Use tables for comparisons to present information in a clear and organized manner
- Use the next heading level for subtopics to maintain hierarchy and organization

#### Visuals

##### Admonitions

- Utilize admonitions to draw attention to important information or provide additional tips or guidance
- Use the appropriate admonition type (note, tip, info, caution, danger) to convey the purpose of the information
- Provide a clear title for the admonition to summarize the information

:::note Why should I add a title to admonitions?

Because it looks better.

:::

##### Assets

- Include relevant visual assets such as images or videos to enhance understanding
- Provide clear captions or descriptions for each visual asset to provide context and aid comprehension
- Ensure you have the permissions to use those assets in this docs

## Testing

1. Use `npm i` to install all dependencies
2. Use `npm run start` to start the development server
3. Navigate to `http://localhost:3000`
4. Review your article and ensure it displays correctly
5. Check for spelling and formatting mistakes, ensuring the content is error-free and adheres to the style guidelines

## Publish your changes

Once all testing is complete and you are satisfied with your changes, create a Pull Request to get your changes implemented.
A Pull Request allows you to propose your modifications to the project's repository and request a review from the maintainers.
This process ensures that your changes undergo a thorough review before being merged into the main branch.
Make sure to provide clear and detailed information about the changes you've made in the Pull Request description to facilitate the review process.