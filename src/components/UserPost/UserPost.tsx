import { format, formatDistanceToNow } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { PostsProps } from "../../data";
import Comments from "../Comments/Comments";
import {
  Author,
  AuthorDescription,
  AuthorName,
  Container,
  FeedbackForm,
  FeedbackTitle,
  FormFooter,
  Input,
  PostButton,
  PostContent,
  PostDivider,
  PostHeader,
  PostLink,
  PostParagraph,
  PostProfileImage,
  PostTime
} from "./styles";

interface UserPostProps {
  post: PostsProps
}

export default function UserPost({post}: UserPostProps) {
  const {author, content, publishedAt} = post;
  const [comments, setComments] = useState([
    "Show demais, parabéns!"
  ])
  const [inputText, setInputText] = useState("")
  
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment() {
    event?.preventDefault()
    setComments([...comments, inputText])
    setInputText("")
  }

  function handleCommentText(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputText(e.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const newListWithoutDeletedComment = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(newListWithoutDeletedComment)
  }

  return (
    <Container>
      <PostHeader>
          <PostProfileImage src={author.avatarUrl}/>
          <Author>
            <AuthorName>{author.name}</AuthorName>
            <AuthorDescription>{author.role}</AuthorDescription>
          </Author>
        <PostTime title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </PostTime>
      </PostHeader>
      <PostContent>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <PostParagraph key={line.content}>{line.content}</PostParagraph>
          } else {
            return <PostLink key={line.content}>{line.content}</PostLink>
          }
        })}
      </PostContent>

      <PostDivider />

      <FeedbackForm onSubmit={handleCreateNewComment}>
        <FeedbackTitle>Deixe seu feedback</FeedbackTitle>
        <Input 
          placeholder="Escreva um comentário..." 
          name="comment"
          value={inputText}
          onChange={(e) => handleCommentText(e)}
        />
        <FormFooter>
          <PostButton type="submit" disabled={!inputText}>Publicar</PostButton>
        </FormFooter>
      </FeedbackForm>
      {comments.map(comment => (
        <Comments key={comment} content={comment} deleteComment={deleteComment}/>
        ))
      }
    </Container>
  )
}