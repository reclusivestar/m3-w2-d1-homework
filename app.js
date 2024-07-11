var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]

const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017/statsdb')

client.connect()
    .then(() => {
        var dbo = client.db('statsdb');
        // console.log('Connected Successfully & Database Created!')
        // dbo.createCollection('uscensus').then(function() {
        //     console.log("Collection created");
        //     client.close();
        // })
        // dbo.collection('uscensus').insertMany(stats).then(function(res) {
        //     console.log("Number of documents inserted: " + res.insertedCount);
        //     client.close()
        // })
        // var statsData = [
        //     {
        //         'city': 'Pacoima', 
        //         'zip': '91331', 
        //         'state': 'CA', 
        //         'income': '60360',
        //         'age': '33'
        //     },
        //     {
        //         'city': 'Ketchikan', 
        //         'zip': '99950', 
        //         'state': 'AK', 
        //         'income': '00000',
        //         'age': '00'
        //     }
        // ]
        // dbo.collection('uscensus').insertMany(statsData).then(function(res) {
        //     console.log("Number of documents inserted: " + res.insertedCount);
        //     client.close()
        // })
        // var query = {city: "Corona", state: 'NY'}
        // dbo.collection('uscensus').find(query)
        //     .toArray()
        //     .then(items => {
        //         console.log(`Successfully found ${items.length} documents.`)
        //         console.log(items[0].zip)
        //         client.close();
        //     })
        // var query = {state: 'CA'}
        // dbo.collection('uscensus').find(query)
        //     .toArray()
        //     .then(items => {
        //         console.log(`Successfully found ${items.length} documents.`)
        //         items.map(item => console.log(item.income));
        //         client.close();
        //     })
        // var myquery = {state: 'AK'}
        // var newvalues = {$set: {income: '38910', age: '46'}}
        // dbo.collection('uscensus').updateOne(myquery, newvalues).then(function() {
        //     console.log("1 document updated")
        //     client.close();
        // })
        var mysort = {state: 1}
        dbo.collection('uscensus').find()
            .sort(mysort)
            .toArray()
            .then(items => {
                console.log(`Successfully sorted ${items.length} documents.`)
                console.log(items);
                client.close();
            })
        })
    .catch(error => console.log('Failed to connect', error))