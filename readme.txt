Teste HBSIS
===============================================================
Kauan Leonardo Gouveia
kauan.lg@gmail.com
https://github.com/kauanlg/

Como Instalar
-------------------------------------------------------------------------------------------------------------
1- Executar o SCRIPT do banco SQL SERVER abaixo antes de executar 
2- Alterar a ConnectionStrings no arquivo appsettings.json


SQL
-------------------------------------------------------------------------------------------------------------------
USE [TesteKauanHBSIS]
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 19/06/2017 13:19:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente](
	[ClienteId] [int] IDENTITY(1,1) NOT NULL,
	[Identificador] [nvarchar](max) NULL,
	[Nome] [nvarchar](max) NULL,
	[Telefone] [nvarchar](max) NULL,
	[TipoClienteId] [int] NOT NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[ClienteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TipoCliente]    Script Date: 19/06/2017 13:19:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoCliente](
	[TipoClienteId] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [nvarchar](max) NULL,
 CONSTRAINT [PK_TipoCliente] PRIMARY KEY CLUSTERED 
(
	[TipoClienteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[Cliente]  WITH CHECK ADD  CONSTRAINT [FK_Cliente_TipoCliente_TipoClienteId] FOREIGN KEY([TipoClienteId])
REFERENCES [dbo].[TipoCliente] ([TipoClienteId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Cliente] CHECK CONSTRAINT [FK_Cliente_TipoCliente_TipoClienteId]
GO
