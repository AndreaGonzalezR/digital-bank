describe ('TestLogin', () => {

    it('Login  with correct username and password', async () => {

        await browser.url('');

        let username = await $('[id = "username"]');
        await username.setValue('jsmith@demo.io');

        let password = await $('[id = "password"]');
        await password.setValue('Demo123!');

        let submit = await $('[id = "submit"]');
        await submit.click();
        
    });


    it ('Log in with incorrect username and correct password', async () => {

        await browser.url('');
        
        let username = await $('[id = "username"]');
        await username.setValue('andrea@demo.io');

        let password = await $('[id = "password"]');
        await password.setValue('Demo123!');

        let submit = await $('[id = "submit"]');
        await submit.click();

        
        
    });

    
    it ('Log in with correct username and incorrect password', async () => {

        await browser.url('');

        let username = await $('[id = "username"]');
        await username.setValue('jsmith@demo.io');

        let password = await $('[id = "password"]');
        await password.setValue('Abc');

        let submit = await $('[id = "submit"]');
        await submit.click();
        
    });


    it('Login with correct credentials and Remember me chechbox', async () => {

        await browser.url('');

        let username = await $('[id = "username"]');
        await username.setValue('jsmith@demo.io');

        let password = await $('[id = "password"]');
        await password.setValue('Demo123!');

        let elemento = await $('[id = "remember-me"]');
        await elemento.click();

        let submit = await $('[id = "submit"]');
        await submit.click();

    });

});