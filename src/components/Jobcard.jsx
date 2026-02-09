
import React from 'react'
import dayjs from 'dayjs';

function Jobcard({job}) {
    const diffInDays = dayjs().diff(job.postedDate, 'day');
  return (
    <div className='mx-40 mb-4'>
        <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:transition-y-1 hover:scale-103'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-lg font-semibold'>{job.title} - {job.conmpany}</h1>
                <p>{job.type} &#x2022; {job.experience} &#x2022; {job.location}</p>
                <div className='flex items-center gap-2'>
                    {job.skills.map((skill)=> (
                        <p key={skill} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                    ))}
                </div>
            </div>    
            <div className='flex items-center gap-4'>
                <p className='text-gray-500'>Posted {diffInDays} days ago</p>
                <a href={job.applyLink}
                   target="_blank"
                   rel='noopener noreferrer'
                   className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">Apply</a>
            </div>
        </div>
    </div>


  )
}

export default Jobcard;
