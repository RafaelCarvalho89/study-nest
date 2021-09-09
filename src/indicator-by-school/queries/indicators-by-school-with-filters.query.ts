export const indicatorsBySchoolWithFiltersQuery = `
  SELECT
    ibs.id,
    ibs."average",
    ibs."distribuation",
    ibs."brands",
	  ibs."censusId",
    ibs."schoolId",
    ibs."indicatorId"
  FROM indicator_by_school ibs
  WHERE
    ibs."censusId" = $1
    AND (ibs."schoolId"::TEXT = ANY($2)
      OR $2::TEXT IS NULL)
    AND (ibs."indicatorId"::TEXT = ANY($3)
      OR $3::TEXT IS NULL);
`;
