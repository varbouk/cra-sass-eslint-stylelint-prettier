/* eslint-disable jsdoc/require-jsdoc */

// @flow
/**
 * This file should trigger warnings and errors if ESLint is well-configured
 */
import { useEffect } from 'react';
import './Test.scss';

/**
 * Flow (if enabled)
 */

// This should trigger a Flow error (signature-verification-failure)
function Test(props) {
  //
  // This should trigger a Flow error (unsafe-addition)
  function square(n) {
    return n * n;
  }
  square('2');

  /**
   * Jest (if enabled)
   */

  // This should trigger an ESLint error (jest/no-disabled-tests)
  describe.skip('foo', () => {});

  /**
   * ESLint
   */

  // This should trigger an ESLint warning (prefer-const)
  let a = 1;

  // This should trigger an ESLint warning (prefer-template)
  const b = a + 'px';

  // This should trigger an ESLint error (no-undef)
  f();

  /**
   * React
   */

  // This should trigger an ESLint error (react/prop-types)
  console.log(props.name);

  /**
   * React Hooks
   */

  // This should trigger an ESLint error (react-hooks/rules-of-hooks)
  if (a) {
    useEffect(() => {
      //
    });
  }

  /**
   * JSDoc
   */

  /**
   * This should trigger an ESLint warning (jsdoc/require-returns)
   */
  const p = () => new Promise(() => {});

  /**
   * Promise
   */

  // This should trigger an ESLint error (promise/catch-or-return)
  p().then(true);

  /**
   * Prettier
   */

  // This should trigger an ESLint warning (prettier/prettier)
  const c = a => a ? 2 : 3; // eslint-disable-line no-confusing-arrow

  /**
   * JSX a11y
   */

  // This should trigger an ESLint error (jsx-a11y/anchor-is-valid)
  const link = <a href="#">Link</a>;

  console.log(a, b, c);

  return (
    <div className="Test">
      <span aria-hidden="yes">This should trigger an ESLint error (jsx-a11y/aria-proptypes)</span>
      {link}
    </div>
  );
}

export default Test;
