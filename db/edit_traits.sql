update chars
set personality_trait = $2,
    ideal = $3,
    bond = $4,
    flaw = $5
  where char_name = $1
