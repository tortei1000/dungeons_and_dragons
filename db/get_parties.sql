select c.party from chars c
join users u on c.user_id = u.id
where u.id = $1