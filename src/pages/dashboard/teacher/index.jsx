import Link from 'next/link'
import React from 'react'

const Index = () => {
  return (
    <div>
        <p>Select your role</p>
        <br /><br />
        <Link href={'/dashboard/teacher/class-teacher'}>Class Teacher</Link>
        <br />
        <Link href={'/dashboard/teacher/subject-teacher'}>Subject Teacher</Link>

    </div>
  )
}

export default Index