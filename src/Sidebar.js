import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
    return (
        <div className="Sidebar" style={styles.sidebar}>
            <div className="Logo" style={styles.logo}>
                <img src={quill} alt="Noteherder" style={styles.logoImg}/>
            </div>
            
            <a 
                className="newNote" 
                href="/ntoes" 
                style={[styles.newNote, styles.button]}>
                    <img 
                        src={newHover} 
                        alt="New note" 
                        style={[styles.img, styles.newNoteImgHover]}  />
                    <img 
                        className="outline" 
                        src={newIcon} 
                        alt="New note" 
                        style={[styles.img, styles.newNoteImg]}/>
            </a>

            <div class="SignOut">
                <button style={[styles.button, styles.signOut]}>
                    <i className="fa fa-sign-out"></i>
                </button>
            </div>
        </div>
    )
}

const styles = {
    sidebar: {
        width:'6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem'
    },
    logoImg: {
        width: '3rem',
        paddingLeft: '0.4rem',
    },
    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '40px',
    },
    button: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008BF8',
        cursor: 'pointer',
    },
    newNoteImgHover: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
        opacity: '0',
    },
    newNoteImg: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
    },
    signOut: {
        position: 'absolute',
        bottom: '1rem',
        outline: 'none',
        fontSize: '2rem',
    },

}

export default Sidebar