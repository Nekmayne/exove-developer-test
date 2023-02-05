SELECT concat(people.first_name, ' ', people.last_name) AS name,
IFNULL(GROUP_concat(phones.number), 'N/A') AS numbers
FROM people LEFT JOIN phones ON people.id = phones.user_id
GROUP BY people.id
ORDER BY last_name;