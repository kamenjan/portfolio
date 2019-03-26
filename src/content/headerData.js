import React from 'react'

const headerData = {
  docSections: [
    {
      docTag: 'name',
      type: 'paragraph',
      content: <span style={{ color: `var(--color-tertiary)` }}>Rok Arih</span>,
    },
    {
      docTag: 'desc',
      type: 'paragraph',
      content: (
        <span style={{ color: `var(--color-tertiary)` }}>Web Developer</span>
      ),
    },
    {
      docTag: 'version',
      type: 'paragraph',
      lineBreakAfter: true,
      content: (
        <span style={{ color: `var(--color-tertiary, #cc7832)` }}>3.2.11</span>
      ),
    },
    {
      docTag: 'link',
      type: 'array',
      content: [
        <a href={'mail'}>mail</a>,
        <a href={'https://github.com/kamenjan'}>github</a>,
        <a href={'https://www.linkedin.com/in/gcbl70xrzi/'}>linkedin</a>,
      ],
    },
  ],
}
export default headerData
