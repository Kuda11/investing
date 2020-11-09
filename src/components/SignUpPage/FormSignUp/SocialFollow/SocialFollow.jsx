import React from 'react'
import styles from "./SocialFollow.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase, { provider } from '../../../../firebase'
import {
  faGoogle
}
  from "@fortawesome/free-brands-svg-icons";

const SocialFollow = () => {

  const goToSignInWithGoogle = () => {
    firebase.auth().signInWithRedirect(provider)
  }

  return (
    <div className={styles.socialContainer}>
      <a onClick={goToSignInWithGoogle} className={styles.twitterSocial}>
        <FontAwesomeIcon icon={faGoogle} size="3x" />
      </a>
    </div>
  );
}

export default SocialFollow