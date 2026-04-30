var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-4-127a",
  "level": "1",
  "url": "#probset-4-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 4",
  "body": " Problem Set 4    MAT 127A SQ 2026  Due Friday, May 8th at 11:59PM      Problems    Do the following series converge or diverge? Justify your answers using our theorems or the definition directly. Remind yourself of the statements of the Divergence Test, Comparison Test, Absolute Convergence Test, Ratio Test, and Alternating Series Test.       Let , , and consider .        It is true that for any two sequences and that differ at only finitely many terms, one converges if and only if the other converges. Use this fact to prove that for any two such sequences converges if and only if converges.   Let be the indices where and differ. What happens to the difference of the series' partial sums for ?     Abbott Exercise 2.7.8. Consider each of the following propositions. Provide short proofs for those that are true and counterexamples for any that are not.   If converges absolutely, then also converges absolutely.  If converges and converges, then converges.  If converges conditionally, then diverges.    For part (a), absolute convergence means that for large , gets very small. What does this mean for ? For part (b), try the contrapositive.     Suppose that is a sequence such that the series converges. Prove that is a Cauchy sequence. Prove the converse in the case when is an increasing sequence.   Use the Cauchy Criterion for series and liberally apply the triangle inequality. For the converse, what does the fact that mean for ? What does this mean for the partial sums?     Optional. Provide a counterexample to the second statement in Problem 4 when is not monotonic.      Optional. Abbott Exercise 2.7.7(a). Show that if and with , then the series diverges.   means that for large , . Hypothesize whether this means should converge or diverge, then use a test to prove it.    "
},
{
  "id": "ps4-prob1",
  "level": "2",
  "url": "#ps4-prob1",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  Do the following series converge or diverge? Justify your answers using our theorems or the definition directly. Remind yourself of the statements of the Divergence Test, Comparison Test, Absolute Convergence Test, Ratio Test, and Alternating Series Test.       Let , , and consider .     "
},
{
  "id": "ps4-prob2",
  "level": "2",
  "url": "#ps4-prob2",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  It is true that for any two sequences and that differ at only finitely many terms, one converges if and only if the other converges. Use this fact to prove that for any two such sequences converges if and only if converges.   Let be the indices where and differ. What happens to the difference of the series' partial sums for ?  "
},
{
  "id": "ps4-prob3",
  "level": "2",
  "url": "#ps4-prob3",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": "  Abbott Exercise 2.7.8. Consider each of the following propositions. Provide short proofs for those that are true and counterexamples for any that are not.   If converges absolutely, then also converges absolutely.  If converges and converges, then converges.  If converges conditionally, then diverges.    For part (a), absolute convergence means that for large , gets very small. What does this mean for ? For part (b), try the contrapositive.  "
},
{
  "id": "ps4-prob4",
  "level": "2",
  "url": "#ps4-prob4",
  "type": "Problem",
  "number": "4",
  "title": "",
  "body": "  Suppose that is a sequence such that the series converges. Prove that is a Cauchy sequence. Prove the converse in the case when is an increasing sequence.   Use the Cauchy Criterion for series and liberally apply the triangle inequality. For the converse, what does the fact that mean for ? What does this mean for the partial sums?  "
},
{
  "id": "ps4-prob5",
  "level": "2",
  "url": "#ps4-prob5",
  "type": "Problem",
  "number": "5",
  "title": "",
  "body": "  Optional. Provide a counterexample to the second statement in Problem 4 when is not monotonic.   "
},
{
  "id": "ps4-prob6",
  "level": "2",
  "url": "#ps4-prob6",
  "type": "Problem",
  "number": "6",
  "title": "",
  "body": "  Optional. Abbott Exercise 2.7.7(a). Show that if and with , then the series diverges.   means that for large , . Hypothesize whether this means should converge or diverge, then use a test to prove it.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
