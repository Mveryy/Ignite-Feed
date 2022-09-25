import { Button, Container, Content, Feedback, FeedbackText, FeedbackTime, Name, ProfileImage, Span } from "./styles";
import {Trash, ThumbsUp} from 'phosphor-react'
import { useState } from "react";

interface CommentsProps {
  content: string;
  deleteComment(comment: string): void;
}

export default function Comments({ content, deleteComment }: CommentsProps ) {
  const [likesAmount, setLikesAmount] = useState(0)

  function handleDeleteComment() {
    deleteComment(content)
  }

  function handleLikeComment() {
    setLikesAmount(likesAmount + 1)
  }

  return (
    <Container>
      <ProfileImage src="https://github.com/Mveryy.png"/>
      <Content>
        <Feedback>
          <Name>
            Matheus Verissimo
            <Span>(você)
              <Trash size={20} onClick={handleDeleteComment}/>
            </Span>
          </Name>
          <FeedbackTime>
            Cerca de 2h
          </FeedbackTime>
          <FeedbackText>
            {content}
          </FeedbackText>
        </Feedback>
        <Button onClick={handleLikeComment}>
          <ThumbsUp size={20} weight="bold"/>
          Aplaudir • {likesAmount}
        </Button>
      </Content>
    </Container>
  )
}