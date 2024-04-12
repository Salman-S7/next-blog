"use client"
import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react';
function AuthLinks() {
   
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
  const { status } = useSession()
=======

  const authenticated = "notauthenticated"
<<<<<<< HEAD
>>>>>>> parent of cc92daf (Frontend complete)
=======
>>>>>>> parent of cc92daf (Frontend complete)
  return (
    <>
      {status === 'unauthenticated'? (<Link href='/login' className={styles.link}>Login</Link>
      ):(
      <>
      <Link href='/write' className={styles.link}>Write</Link>
      <Link href='#' className={styles.link} onClick={()=>signOut()}>Logout</Link>
      </>
      )}
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
      
        {status === 'notauthenticated'?
          (
          <Link href='/login'>Login</Link>
          ):(
            <>
            <Link href='#'>Write</Link>
            <Link href='#'>Logout</Link>
            </>
          )}
        </div>
      )}
      
    </>
  )
}

export default AuthLinks