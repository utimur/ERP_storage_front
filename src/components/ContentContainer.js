import { Container } from '@material-ui/core'

const ContentContainer = ({ children }) => (
  <Container style={{ height: '100%', paddingTop: 50 }} maxWidth='lg'>
    {children}
  </Container>
)

export default ContentContainer
