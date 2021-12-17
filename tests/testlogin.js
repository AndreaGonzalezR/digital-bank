describe ('TestLogin', () => {

    it('Probar con username y password correctos', async () => {

        await browser.url('');

        let username = await $('[id = "username"]');

        await username.setValue('jsmith@demo.io');

        

        let password = await $('[id = "password"]');

        await password.setValue('Demo123!');

        await browser.pause(3000);

        let submit = await $('[id = "submit"]');
        await submit.click();
        await browser.url('http://localhost:8080/bank/home');

        await browser.pause(5000);

    });

    it ('Probar con username incorrecto y password correcto', async () => {

        await browser.url('');

        let username = await $('[id = "username"]');

        await username.setValue('andrea@demo.io');

        

        let password = await $('[id = "password"]');

        await password.setValue('Demo123!');

        

        let submit = await $('[id = "submit"]');
        await submit.click();
        

        await browser.pause(5000);

    });

    it ('Probar con username correcto y password incorrecto', async () => {

        await browser.url('');

        let username = await $('[id = "username"]');

        await username.setValue('jsmith@demo.io');

        

        let password = await $('[id = "password"]');

        await password.setValue('Abc');

        

        let submit = await $('[id = "submit"]');
        await submit.click();
        

        await browser.pause(5000);

    });

    it('Probar credenciales correctas y seleccionar checkbox de Remember me', async () => {

        await browser.url('');
        let username = await $('[id = "username"]');

        await username.setValue('jsmith@demo.io');

        
        let password = await $('[id = "password"]');

        await password.setValue('Demo123!');


        let elemento = await $('[id = "remember-me"]');
        await elemento.click();

        await browser.pause(5000);

        let submit = await $('[id = "submit"]');
        await submit.click();



        await browser.url('http://localhost:8080/bank/home');
        
        await browser.pause(5000);
    });

    /*it ('Probar Mensaje de error al ingresar un username incorrecto', async () => {

        await browser.url('');



    });*/
   

});