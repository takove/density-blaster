import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Can you send me a sample?',
      answer:
        'Because Mailjoy is self-service and so simple to use, we don’t send samples. Sign up for Mailjoy for free and create a sample campaign to send to yourself in a matter of minutes. Yes, it’s really that easy!',
    },
    {
      question: 'What’s the difference between postcards and letters?',
      answer:
        'Postcards are our most affordable mailer type and are perfect for marketing as their message is immediately visible. Letters are our newest mailer type. They come stuffed inside of an envelope.',
    },
    {
      question: 'How do you compare to a traditional print shop?',
      answer:
        'We’re the exact opposite of a traditional print shop. We’re built for modern marketers who want a powerful self-service tool to create, manage, and track your direct mail. Mailjoy also integrates with your other marketing tools and offers simple on-demand pricing.'        
    },
  ],
  [
    {
      question: 'How does pricing work?',
      answer:
        'No mystery pricing that requires a quote. No design fees. No list cleanup fees. No setup fees. You only pay for each postcard you send (print, first-class postage, and tracking included). You may also choose to upgrade to a credit plan which includes a monthly allocation of discounted mailer credits.',
    },
    {
      question: 'So your templates and design software are free?',
      answer:
        'Yes! The Mailjoy platform and all of its functionality are free to use. We only charge you per mailer when you’re ready to send off a campaign.',
    },
    {
      question: 'Do you have enterprise pricing?',
      answer:
        'For companies who send a lot of mail or have large mailing lists to sync with Mailjoy, we offer enterprise plans which feature lower mailer costs, more functionality, and an API. Please contact us to learn more.',
    },
  ],
  
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Commonly asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
