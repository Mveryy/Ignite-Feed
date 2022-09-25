import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import UserPost from './components/UserPost/UserPost'
import { Container, Content, Feed } from './styles'
import {posts} from './data.js'


function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Feed>
         {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </Feed>
      </Content>
    </Container>
  )
}

export default App
