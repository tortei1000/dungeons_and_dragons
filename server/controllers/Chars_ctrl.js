module.exports = {
  getAll: (req, res) => {
    
    const db = req.app.get('db')
    let { id } = req.session.user
    // id = String(id)
    
    // if (req.query.title) {
    //   let searchTerm = `%${req.query.title}%`
    //   console.log('here is req', searchTerm)
    //   db.search([id, searchTerm]).then((recipe) => {
    //     res.status(200).send(recipe)
    //   })
    // } else {

    db.get_chars([id]).then((chars) => {
      res.status(200).send(chars)
    }).catch(err => console.log("error", err))
  },

  getClasses: (req, res) => {
    console.log('get classes fired')
    const db = req.app.get('db')
    
    

    db.get_classes().then((classes) => {
      res.status(200).send(classes)
    }).catch(err => console.log("error", err))
  },

  newChar: (req, res) => {
    console.log('newChar was fired', req.body)
    let {char_name, last_name, selectedClass} = req.body
    const db = req.app.get('db')
    let {id} = req.session.user

    db.new_char([id, char_name, last_name, selectedClass]).then((char)=> {
      res.status(200).send(char)

    }).catch(err=> console.log('error', err))
  },

  getOne: async (req,res) => {
    
    const db = req.app.get('db')
    let { id } = req.session.user
    let {char_name} = req.body

    let thisChar = await db.get_one_char([id, char_name])
    res.send(thisChar[0])
    
  },
  getOneLang: async (req,res) => {
    
    const db = req.app.get('db')
    let { id } = req.session.user
    let {char_name} = req.body

    let thisCharLang = await db.get_one_languages([id, char_name])
    
    res.send(thisCharLang)
        
  },
  getOneProf: async (req,res) => {
    console.log(`getOneProf fired`, req.body)
    const db = req.app.get('db')
    let { id } = req.session.user
    let {char_name} = req.body

    let thisCharProf = await db.get_one_prof([id, char_name])
    
    res.send(thisCharProf)
        
  },

  getOneAttacks: async (req,res) => {
    
    const db = req.app.get('db')
    let { id } = req.session.user
    let {char_name} = req.body

    let thisCharAttacks = await db.get_one_attacks([id, char_name])
    
    res.send(thisCharAttacks)
        
  },
  getOneDPack: async (req,res) => {
    
    const db = req.app.get('db')
    let { id } = req.session.user
    let {char_name} = req.body

    let thisCharDPack = await db.get_one_d_pack([id, char_name])
    
    res.send(thisCharDPack)
        
  },
  getOneOutlander: async (req,res) => {
    
    const db = req.app.get('db')
    let { id } = req.session.user
    let {char_name} = req.body

    let thisCharOutlander = await db.get_one_outlander([id, char_name])
    
    res.send(thisCharOutlander)
        
  },
  getOneFeatures: async (req,res) => {
    
    const db = req.app.get('db')
    let { id } = req.session.user
    let {char_name} = req.body

    let thisCharFeatures = await db.get_one_features([id, char_name])
    
    res.send(thisCharFeatures)
        
  },

  delete: (req, res) => {
    console.log(req.body)
    
    const db = req.app.get('db')

    
    let {id : user} = req.session.user
    let {id} = req.body

    db.delete_char([user, id]).then((chars)=> {
      res.status(200).send(chars)

    }).catch(err=> console.log('error', err))

    
  },
  getOneSpells: async (req,res) => {
    
    const db = req.app.get('db')
    let { id } = req.session.user
    let {char_name} = req.body

    let thisCharSpells = await db.get_one_spells([id, char_name])
    
    res.send(thisCharSpells)
        
  },
  addCantrip: async (req,res) => {
    console.log(req.body)
    const db = req.app.get('db')
    
    let {id, cantripName, spell_level} = req.body
    

    let thisCharSpells = await db.add_cantrip([id, cantripName, spell_level])
    
    res.send(thisCharSpells)
        
  },

  getOneCantrips: async (req,res) => {
    
    const db = req.app.get('db')
    let { id } = req.session.user
    let {char_name} = req.body

    let thisCharSpells = await db.get_one_cantrips([id, char_name])
    
    res.send(thisCharSpells)
        
  },
  removeCantrip: async (req,res) => {
    
    const db = req.app.get('db')
    
    let {id : user} = req.session.user
    let {id} = req.body

    let thisCharSpells = await db.delete_cantrips([id, user])
    
    res.send(thisCharSpells)
        
  },

  editPartyName: async (req,res) => {
    console.log('edit fired',req.body)
    const db = req.app.get('db')
    
    let {party_name} = req.body
    let { id } = req.session.user

    let thisCharParty = await db.edit_party_name([party_name, id])
    
    res.send(thisCharParty)
        
  },

}


  

