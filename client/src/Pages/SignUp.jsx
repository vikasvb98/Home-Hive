import React from 'react';
import heroSignUp from '../assets/heroSignUp.webp';

const SignUp = () => {
  return (
    <>
      <div className='opacity-85 text-white flex items-center px-6' style={{ backgroundImage: `url(${heroSignUp})`, height: '32rem', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-3/4 p-2'>
        <h1 className='text-4xl font-bold leading-snug tracking-normal'>Sign-Up <br /> And Get <span className='text-sky-500'>20%</span> off <br /> On First Buy!!</h1>
        <p className=' text-sky-200 text-lg font-bold'>Reffer to a friend and earn points </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;