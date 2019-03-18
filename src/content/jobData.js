import React from 'react'

const jobData = [
  {
    docSections: [
      {
        docTag: 'name',
        type: 'paragraph',
        lineBreakAfter: true,
        content: (
          <span>
            <a href={'https://www.termitnjak.com/en'} target={'_blank'}>
              Termitnjak
            </a>{' '}
            2015-2016
          </span>
        ),
      },
      {
        docTag: 'summary',
        type: 'paragraph',
        lineBreakAfter: true,
        content:
          'Termitnjak is a small company offering B2B and B2C web development, consulting and hosting services to EU and worldwide markets.',
      },
      {
        docTag: 'role',
        type: 'paragraph',
        lineBreakAfter: true,
        content: (
          <>
            I was brought on board as a{' '}
            <span style={{ color: `var(--color-tertiary, #cc7832)` }}>
              Frontend Developer
            </span>{' '}
            but later I also assisted on system and cloud administration.
          </>
        ),
      },
      {
        docTag: 'responsibilities',
        type: 'list',
        lineBreakAfter: true,
        content: [
          'advertising campaigns',
          'templating for Plone based projects',
          'Wordpress and Magento customizations',
          'client management & communication',
          'system & cloud administration',
        ],
      },
      {
        docTag: 'projects',
        type: 'array',
        lineBreakAfter: true,
        content: [
          <a href={'https://www.archicubator.com/en'} target={'_blank'}>
            Archicubator
          </a>,
          <a href={'https://waammat.com/'} target={'_blank'}>
            WAAMMat
          </a>,
          <a href={'https://mladipodjetnik.si'} target={'_blank'}>
            MladiPodjetnik
          </a>,
          <a href={'http://www.oceanorchids.si/'} target={'_blank'}>
            OceanOrchids
          </a>,
        ],
      },
      {
        docTag: 'tags',
        type: 'array',
        lineBreakAfter: true,
        content: [
          'javascript',
          'npm_scripts',
          'jquery',
          'bootstrap',
          'sass',
          'php',
          'python',
          'plone',
          'linux',
          'bash',
          'git',
          'LaTeX',
          'photoshop',
        ],
      },
    ],
  },
  {
    docSections: [
      {
        docTag: 'name',
        type: 'paragraph',
        lineBreakAfter: true,
        content: (
          <span>
            <a href={'http://www.consoriana.com/'} target={'_blank'}>
              Consoriana
            </a>{' '}
            2016-2018
          </span>
        ),
      },
      {
        docTag: 'summary',
        type: 'paragraph',
        lineBreakAfter: true,
        content:
          'A company responsible for one of the most complete yacht management systems out there called DeepBlue Software.',
      },
      {
        docTag: 'role',
        type: 'paragraph',
        lineBreakAfter: true,
        content: (
          <>
            Working as{' '}
            <span style={{ color: `var(--color-tertiary, #cc7832)` }}>
              Fullstack Developer
            </span>{' '}
            with most of my time going into development of DeepBlue software. In
            later stages, when DeepBlue was deemed stable, I started development
            on Filmio - a movie production management software forked from
            DeepBlue. I also assumed the role of the IT support on remote
            locations.
          </>
        ),
      },
      {
        docTag: 'responsibilities',
        type: 'list',
        lineBreakAfter: true,
        content: [
          'developing enterprise management system',
          'maintaining and working on legacy code',
          'in-house and ad-hoc web projects',
          'on-site IT support',
        ],
      },
      {
        docTag: 'projects',
        type: 'array',
        lineBreakAfter: true,
        content: [
          <a href={'http://deepbluesw.com/'} target={'_blank'}>
            DeepBlue
          </a>,
          <a href={'http://paktmedia.com/'} target={'_blank'}>
            PaktMedia
          </a>,
          <a href={'http://adriapharm.com/'} target={'_blank'}>
            AdriaPharm
          </a>,
        ],
      },
      {
        docTag: 'tags',
        type: 'array',
        lineBreakAfter: true,
        content: [
          'php',
          'apache',
          'mariaDB',
          'jQuery',
          'javascript',
          'linux',
          'bash',
          'svn',
        ],
      },
    ],
  },
]
export default jobData
