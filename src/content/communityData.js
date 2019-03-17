import React from 'react'

const communityData = [
  {
    docSections: [
      {
        docTag: 'name',
        type: 'paragraph',
        lineBreakAfter: true,
        content: (
          <span>
            <a
              href={
                'http://www.termitnjak.com/en/blog/dragon-sprint-2016-a-full-week-of-sprinting-on-pyramid'
              }
              target={'_blank'}
            >
              Dragon Sprint
            </a>{' '}
            2016
          </span>
        ),
      },
      {
        docTag: 'role',
        type: 'array',
        lineBreakAfter: true,
        content: ['organizer', 'developer'],
      },
      {
        docTag: 'description',
        type: 'paragraph',
        content:
          'Sprint was focused on improving the Pyramid framework by debugging, upgrading existing features and implementing new ones. I did some frontend tweaks but mostly helped with organization.',
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
            <a
              href='https://www.meetup.com/React-Development-Meetup-Slovenija/events/256143735/'
              target={'_blank'}
            >
              React Meetup
            </a>{' '}
            2018
          </span>
        ),
      },
      {
        docTag: 'role',
        type: 'array',
        lineBreakAfter: true,
        content: ['organizer', 'co-host', 'speaker'],
      },
      {
        docTag: 'description',
        type: 'paragraph',
        content:
          'In November 2018 I\'ve organized and co-hosted the first React Meetup in Ljubljana. I also gave a talk titled "What can React library do for you". Meetup was a great success with over 50 attendees.',
      },
    ],
  },
]
export default communityData
