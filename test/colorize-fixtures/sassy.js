const Component = styled(Component)`
  @value col: #foo;

  composes: fsf-2 fsfs ${styles.boo} from './bar.scss';
  composes: ${styles.boo} from global;

  @each $foo, $bar in $baz {
    .#{$foo} {
      color: $bar;
    }
  }

  color: red;
`
