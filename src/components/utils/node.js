/**
 * VNode helper
 */
export default {
  name: 'jv-node',
  functional: true,
  props: {
    node: Array
  },
  render(h, ctx) {
    return ctx.props.node;
  }
};
