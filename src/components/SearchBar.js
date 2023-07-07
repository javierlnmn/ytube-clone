import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchTerm: '',
        validSearchTerm: true,
    }

    handleChange = (event) => { this.setState({ searchTerm: event.target.value, }); };

    
    handleSubmit = (event) => { 

        event.preventDefault();

        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        if (searchTerm.trim() === '') {
            this.setState({
                validSearchTerm: false,
            });
            return;
        }

        this.setState({
            validSearchTerm: true,
        });

        onFormSubmit(searchTerm);
    };

    render() {
        return (
            <div className='w-full lg:w-2/3 lg:max-w-3xl mb-7 my-0 mx-auto'>
                <form onSubmit={this.handleSubmit}>

                    <div className={ (!this.state.validSearchTerm ? 'flex' : 'hidden') + ' space-x-1 items-center mb-2 transition-all' }>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-[25px] w-[25px] text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        <p className='text-white text-lg font-semibold'>Please enter something</p>
                    </div>

                    <div className='flex space-x-4 h-10 md:h-12'>

                        <div className='flex flex-1 rounded-md overflow-hidden shadow-lg'>
                            <input 
                                type='text'
                                placeholder='Search for video...'
                                onChange={this.handleChange}
                                className='w-full rounded-md rounded-r-none pl-5 pr-2 outline-2 transition-all' 
                            />
                            <button type='submit' className='shadow-lg bg-teal-500 hover:bg-teal-600 hover:cursor-pointer text-white px-4 md:px-6 text-lg font-semibold rounded-r-md transition-all'>Search</button>
                        </div>

                        <button type='reset' className='shadow-lg bg-white px-4 md:px-6 text-lg font-semibold rounded-md'>Clear</button>
                    </div>

                </form>
            </div>
            
        );
    }
}

export default SearchBar;