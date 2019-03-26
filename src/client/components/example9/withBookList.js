import RenderWhileLoading from './RenderWhileLoading';
import { compose } from 'react-apollo';
import {withBooks } from '../../queries/withBooks';


export const withBookList = compose(
  withBooks,
  //RenderWhileLoading("bookInfo"),
)
