import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://i.pinimg.com/736x/b5/89/7d/b5897d1aa164ea5053165d4a04c2f2fa.jpg' />
          <div className={styles.authorInfo}>
            <strong>Artur Bernardo</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time dateTime='2025-23-11 20:35:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href=''>jane.design/doctorcare </a>{' '}
        </p>
        <p>
          <a href=''>#novoprojeto</a> <a href=''>#nlw </a>{' '}
          <a href=''>#rocketseat </a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
