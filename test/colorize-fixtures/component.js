const Component = styled(Component)`
  @value col: #foo;

  composes: ${styles.boo} from './bar.scss';

  color: #ebebeb;
`
