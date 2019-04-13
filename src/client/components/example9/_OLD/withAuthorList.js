import RenderWhileLoading from './RenderWhileLoading';
import { compose } from 'recompose';
import { withAuthors } from '../../queries/withAuthors';


export const withAuthorList = compose(
  withAuthors,
  //RenderWhileLoading("authorInfo"),
)

