import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src='https://i.pinimg.com/736x/b5/89/7d/b5897d1aa164ea5053165d4a04c2f2fa.jpg'
        alt=''
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Artur Bernardo</strong>
              <time
                title='24 de Novembro às 16:36'
                dateTime='2025-11-24 16:36:30'
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
