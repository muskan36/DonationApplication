const checkout =  async (req, res) =>{
  try{
     console.log("checkout controller", req.body);
     const {amount} = req.body;

     const invoice =  await paymentApicreateInvoice(amount);
  } catch (error){
     console.log(error);
     throw error;
  } 
};

module.exports = {checkout};

