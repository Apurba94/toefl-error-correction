/* Error Correction: find the mistake in a sentence and learn the rule. */
(function () {
  'use strict';
  const App = {
    about: 'Finding your own mistakes quickly is a skill. Each of twelve original sentences has four marked parts and one error, in agreement, tense, articles, prepositions, word form, countable nouns, gerunds, pronouns, comparatives, parallel structure or conditionals. Find it, then read the rule.',
    how: ['Read the sentence in **Practice** and choose the marked part that is wrong.', 'Say the corrected sentence aloud after each answer.', 'Use the same habit when you proofread your emails and posts.'],
    tabs: [SK.bankTab('practice', 'Practice', (ctx) => ctx.data.errors, { sizes: [6, 12], modes: false })],
    checks: { 'every sentence marks four parts with one error': (data, assert) => { for (const it of data.errors) { assert.deepEqual(SK.validateItem(it), []); assert.equal(it.choices.length, 4); assert.equal((it.stem.match(/\([A-D]\)/g) || []).length, 4); } } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
