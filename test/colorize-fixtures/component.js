const Component = styled(Component)`
  @value col: #foo;

  :export {

  }

  composes: ${styles.boo} from './bar.scss';
  composes: ${styles.boo} from global;

  color: #ebebeb;
`
