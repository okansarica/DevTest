using System.Collections.Generic;
using System.Threading.Tasks;
using DeveloperTest.Models;

namespace DeveloperTest.Business.Interfaces
{
    public interface ICustomerService
    {
        Task<CustomerModel> CreateCustomerAsync(BaseCustomerModel model);
        Task<List<CustomerModel>> GetCustomersAsync();
        Task<CustomerModel> GetCustomerAsync(int customerId);
    }
}
