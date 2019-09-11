const Component = styled(Component)`
  @value col: #foo;

  composes: fsf fsfs ${styles.boo} from './bar.scss';
  composes: ${styles.boo} from global;

  color: #ebebeb;
`
