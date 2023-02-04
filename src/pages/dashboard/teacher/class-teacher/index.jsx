import Link from 'next/link'
import React from 'react'

const Index = () => {
    return (
        <div>
            Hello Class Teacher
            <br /><br />
            <select name="role" id="role">
                <option value="#">Class Teacher</option>
                <option value="#">Subject Teacher</option>
            </select>
        </div>
    )
}

export default Index