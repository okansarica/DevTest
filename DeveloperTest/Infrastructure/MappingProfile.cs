using AutoMapper;
using DeveloperTest.Database.Models;
using DeveloperTest.Models;

namespace DeveloperTest.Infrastructure
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<BaseCustomerModel, Customer>(MemberList.Source);
            CreateMap<Customer, CustomerModel>(MemberList.Source);
        }
    }
}
