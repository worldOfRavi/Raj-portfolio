import React from 'react'

const SendMail = () => {
  return (
    <div className='w-full h-full flex items-center justify-center bg-gray-100'>
      <div className="border-2 border-purple-500">
        <form>
            <div>
                <label htmlFor="mail">Dear <span className='text-purple-500'>Rajendra</span></label>
                <textarea name="mail" id="mail" className='w-50' placeholder='write mail'></textarea>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SendMail
