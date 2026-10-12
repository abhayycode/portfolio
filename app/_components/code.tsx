import { createHighlighter } from 'shiki';

// `createHighlighter` is async, it initializes the internal and
// loads the themes and languages specified.
const highlighter = await createHighlighter({
  themes: ['github-dark'],
  langs: ['javascript'],
});

export const Code = ({ code }: { code: string }) => {
  const html = highlighter
    .codeToHtml(code, {
      lang: 'javascript',
      theme: 'github-dark',
    })
    .replace(' tabindex="0"', '');

  return <div className="code-block" dangerouslySetInnerHTML={{ __html: html }} />;
};
