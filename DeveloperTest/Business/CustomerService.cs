using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using DeveloperTest.Business.Interfaces;
using DeveloperTest.Database;
using DeveloperTest.Database.Models;
using DeveloperTest.Models;
using Microsoft.EntityFrameworkCore;

namespace DeveloperTest.Business
{
    public class CustomerService:ICustomerService
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public CustomerService(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<CustomerModel> CreateCustomerAsync(BaseCustomerModel model)
        {
            var customer = _mapper.Map<Customer>(model);
            await _context.Customers.AddAsync(customer);
            await _context.SaveChangesAsync();

            return _mapper.Map<CustomerModel>(customer);
        }

        public async Task<List<CustomerModel>> GetCustomersAsync()
        {
            var customers = await _context.Customers.ToListAsync();
            return _mapper.Map<List<CustomerModel>>(customers);
        }

        public async Task<CustomerModel> GetCustomerAsync(int customerId)
        {
            var customer = await _context.Customers.SingleOrDefaultAsync(p => p.CustomerId == customerId);
            return customer==null ? null : _mapper.Map<CustomerModel>(customer);
        }
    }
}
