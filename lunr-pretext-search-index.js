var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-4-solutions-127a",
  "level": "1",
  "url": "#probset-4-solutions-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 4 Solutions",
  "body": " Problem Set 4 Solutions    MAT 127A SQ 2026        Problem 1: Do the following series converge or diverge? Justify your answers using our theorems or the definition directly. You do not have to write out the statements, but remind yourself of the statements of the Divergence Test, Comparison Test, Absolute Convergence Test, Ratio Test, and Alternating Series Test.                   Let , , and consider          Solution: In all of the following parts, let denote the -th term of the sequence being summed in the series we're considering.   Notice that   So, this series diverges by the Divergence Test.   Notice that . Since , the series converges, and converges by the Comparison Test.   Observe that for all    Therefore, does not converge to 0, and the series diverges by the Divergence Test.   Since the sequence is decreasing and satisfies , the Alternating Series Test implies converges.   Let's compute the ratio . Notice   Since (by the Algebraic Limit Theorem) we know that   Therefore, the Ratio Test implies this series converges.   This should behave like a geometric series, so let's use the ratio test. Notice that   But, since (We could conclude this by part (e) since converges), we know   So, this series converges by the Ratio Test.     Problem 2: It is true that for any two sequences and that differ at only finitely many terms, one converges if and only if the other converges. Use this fact to prove that for any two such sequences converges if and only if converges.   Solution: Let denote the sequence of partial sums of , and let denote the sequence of partial sums for . The fact that and differ at only finitely many indices means that there exists an integer such that for all . Therefore,   for all . This then gives   where is just some constant. Therefore, if converges, then converges by the Algebraic Limit Theorem. On the other hand, we have   so that if converges, then converges too for the same reason.   Problem 3: Complete Exercise 2.7.8 .   Solution:    True. The intuition is that absolutely convergent series have very tiny terms for large , and squaring any number makes its magnitude even smaller. Since convergence of series only depends on the tail end behavior (just like for sequences), there is a point beyond which , and you can bound the difference of partial sums of the squared series by the original series.  Since converges, we know that . We will use the Cauchy Criterion to show that also converges absolutely. Let and let be an integer such that   We claim that this choice of works for showing that satisfies the Cauchy Criterion. Indeed, for any , the fact that implies so that    False. Take   The series converges by the alternating series test, yet , which diverges.   True. The idea is to compare with , a series that converges absolutely.  One way is to do this is to prove the contrapositive. Assume that converges. Our goal will be to show that converges absolutely, not conditionally. Since converges, we know that . This means that there exists some such that for all . Rearranging this gives for all . Comparing with , we see that converges absolutely.     Problem 4: Suppose that is a sequence such that the series converges. Prove that is a Cauchy sequence.   Solution: We will use the Cauchy Criterion for series to verify the definition of Cauchy for holds. Let . The Cauchy criterion for series says that there exists such that for any and satisfying , we have   We claim that we can take to verify that is Cauchy. Indeed, for any , we have so that we can apply the above condition with and in place of and respectively to get   "
},
{
  "id": "probset-4-solutions-127a-3",
  "level": "2",
  "url": "#probset-4-solutions-127a-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1: "
},
{
  "id": "probset-4-solutions-127a-5",
  "level": "2",
  "url": "#probset-4-solutions-127a-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-4-solutions-127a-7",
  "level": "2",
  "url": "#probset-4-solutions-127a-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2: "
},
{
  "id": "probset-4-solutions-127a-8",
  "level": "2",
  "url": "#probset-4-solutions-127a-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-4-solutions-127a-15",
  "level": "2",
  "url": "#probset-4-solutions-127a-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3: Exercise 2.7.8 "
},
{
  "id": "probset-4-solutions-127a-16",
  "level": "2",
  "url": "#probset-4-solutions-127a-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-4-solutions-127a-18",
  "level": "2",
  "url": "#probset-4-solutions-127a-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 4: "
},
{
  "id": "probset-4-solutions-127a-19",
  "level": "2",
  "url": "#probset-4-solutions-127a-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
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
