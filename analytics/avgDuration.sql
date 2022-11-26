SELECT t.testId,
  avg(durationMs)
from Test t
  INNER JOIN (
    SELECT min(id) as firstId,
      testId,
      testUserId
    FROM Test t
    GROUP BY testId,
      testUserId
  ) t2 ON t.id = t2.firstId
  AND t.testId = t2.testId
  AND t.testUserId = t2.testUserId
GROUP BY testId;
