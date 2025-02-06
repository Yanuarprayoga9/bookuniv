import BookOverview from '@/components/BookOverview'
import { Button } from '@/components/ui/button'
import React from 'react'
import { sampleBooks } from '../constants'
import BookList from '@/components/BookList'

const RootPage = () => {
  return (
    <div>
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </div>
  )
}

export default RootPage
