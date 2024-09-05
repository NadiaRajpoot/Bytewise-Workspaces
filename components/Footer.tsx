import React from 'react'

const Footer = () => {
  return (
    <div>
        <section  className=" font-sans text-white py-6 bg-[#2e282e] mt-[11rem] px-10 text-center">
            <div >    
                <p className="font[14px] opacity-[.7]">
                    &copy; {new Date().getFullYear()} This website was developed by Nadia Rajpoot. All rights reserved.
                </p>
            </div>
        </section>
      
    </div>
  )
}

export default Footer
