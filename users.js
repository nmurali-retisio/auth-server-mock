module.exports = {
    'rob@retisio.com': {
        username: 'rob',
        email: 'rob@retisio.com',
        password: 'rob',
        role: 'ADMIN'
    },
    'julie@retisio.com': {
        username: 'julie',
        email: 'julie@retisio.com',
        password: 'julie',
        role: 'ADMIN',
    },
    'steve@retisio.com': {
        username: 'steve',
        email: 'steve@retisio.com',
        password: 'steve',
        role: 'COO_CUSTOMER',
        analyticsClaims:{
            domainAccess: ["Customer", "Acquisition", "Discovery", "Engagement", "Retention", "Conversion"],
        }
    },
    'nikita@retisio.com': {
        username: 'nikita',
        email: 'nikita@retisio.com',
        password: 'nikita',
        role: 'CATEGORY_MANAGER_TOYS',
        analyticsClaims: {
            domainAccess: ["Product",
             "Order", "Revenue", "Search",
              "Recommendation", "Customer",
               "Acquisition", "Discovery", "Engagement",
                "Retention", "Conversion"],
            dataAccess: [{
                member: "ProductCategories.name",
                operator: "Equals",
                values: ["Toys"]
            }]
        }
    }
}