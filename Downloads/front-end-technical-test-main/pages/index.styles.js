import styled, {css} from 'styled-components';
import { switchProp } from 'styled-tools';


export const Layout = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;

export const Grid = styled('div')`
  margin: 0 auto;
  flex-wrap: wrap;

`;

export const BaseHeader = styled('header')`
  background: var(--color-dark-purple);
  position: relative;
`;

export const Content = styled('div')`
  display: flex;
  padding: 1rem 2.5rem;
`;

export const Main = styled('main')`
  flex: 1;
  margin: 0 auto;
  max-width: 70rem;
  padding: 0 2.5rem;
  width: 100%;
`;

export const Row = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;

  @media (min-width: 48rem) {
    display: flex;
    flex-direction: row;
    margin: 0;
  }
`;

export const Col = styled('div')`
  /* Columns stack on small viewports */
  display: block;
  padding: 0 0.5rem;
  width: 100%;

  ${switchProp('align', {
    left: css`
      text-align: left;
    `,

    right: css`
      text-align: right;
    `
  })}

  @media (min-width: 48rem) {
    ${switchProp('span', {
      1: css`
        flex: 0 0 calc(1 / 12 * 100%);
        max-width: calc(1 / 12 * 100%);
      `,
      2: css`
        flex: 0 0 calc(2 / 12 * 100%);
        max-width: calc(2 / 12 * 100%);
      `,
      3: css`
        flex: 0 0 25%;
        max-width: 25%;
      `,
      4: css`
        flex: 0 0 calc(4 / 12 * 100%);
        max-width: calc(4 / 12 * 100%);
      `,
      5: css`
        flex: 0 0 calc(5 / 12 * 100%);
        max-width: calc(5 / 12 * 100%);
      `,
      6: css`
        flex: 0 0 50%;
        max-width: 50%;
      `,
      7: css`
        flex: 0 0 calc(7 / 12 * 100%);
        max-width: calc(7 / 12 * 100%);
      `,
      8: css`
        flex: 0 0 calc(8 / 12 * 100%);
        max-width: calc(8 / 12 * 100%);
      `,
      9: css`
        flex: 0 0 75%;
        max-width: 75%;
      `,
      10: css`
        flex: 0 0 calc(10 / 12 * 100%);
        max-width: calc(10 / 12 * 100%);
      `,
      11: css`
        flex: 0 0 calc(11 / 12 * 100%);
        max-width: calc(11 / 12 * 100%);
      `,
      12: css`
        flex: 0 0 100%;
        max-width: 100%;
      `
    })}
    ${switchProp('offset', {
      1: css`
        margin-left: calc(1 / 12 * 100%);
      `,
      2: css`
        margin-left: calc(2 / 12 * 100%);
      `,
      3: css`
        margin-left: 25%;
      `,
      4: css`
        margin-left: calc(4 / 12 * 100%);
      `,
      5: css`
        margin-left: calc(5 / 12 * 100%);
      `,
      6: css`
        margin-left: 50%;
      `,
      7: css`
        margin-left: calc(7 / 12 * 100%);
      `,
      8: css`
        margin-left: calc(8 / 12 * 100%);
      `,
      9: css`
        margin-left: 75%;
      `,
      10: css`
        margin-left: calc(10 / 12 * 100%);
      `,
      11: css`
        margin-left: calc(11 / 12 * 100%);
      `
    })};
  }
`;
