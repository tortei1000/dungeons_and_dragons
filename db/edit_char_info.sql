update chars
set char_class = $2,
    char_level = $3,
    background = $4,
    player_name = $5,
    race = $6,
    alignment = $7,
    experience_points = $8
where char_name = $1